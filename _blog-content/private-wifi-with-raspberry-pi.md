---
title: "Building Private WiFi Hotspot With RaspberryPi, RaspAP, and VPN"
description: "Build your private WiFi hotspot so that your internet provider can't spy on you."
image: "/book-images/nord-vpn-account-page.png"
date: "2021-04-09"
tags: ["tech"]
---

Your internet service provider can see every single app and site you use - even if the website is using encrypted `HTTPS` protocol.

DNS is to blame. It is used by (almost) every single app in your system, but even in 2021, it is still [unencrypted](https://blog.cloudflare.com/dns-encryption-explained/).

The obvious solution would be to use a different DNS then, but it still travels through your ISP's network unencrypted and thus, they still can see it.

Until DNS is encrypted, the only real protection is to use VPN.

And rather than setting up VPN on every single device in my household, I've decided to build my own WiFi hotspot that will be permanently connected to VPN.

You will need **RaspberryPi**, **Lan cable (RJ45)**, and a **NordVPN** account (or any other VPN).

## Setting it up

<aside><p>I assume that you have some basic Linux skills.</p></aside>

### Step 1 - Install Raspbian

Install clean `Raspberry Pi OS (32-bit) Lite` on your RaspberryPi.

Use a [headless setup](https://youtu.be/ntaXWS8Lk34) in case you don’t have an extra monitor and keyboard around. It will allow you to connect to your RaspberryPi remotely.

### Step 2 - Install RaspAP

[RaspAP](https://raspap.com) is simple and powerful software that will turn your RaspberryPi into a WiFi access point. It puts together all the Linux services around networking into a nice UI.

Follow this [quick setup guide](https://docs.raspap.com/quick/) on RaspAP website. Make sure you install also **AdBlock** and **OpenVPN** components.

After that, plug your RaspberryPi with Lan cable into the router provided by your ISP.

### Step 3 - Setup WiFi network

In RaspAP Web UI (http://10.3.141.1), go to `Hotspot` settings and change your SSID and Password.

I also recommend to setup your WiFi to use [802.11ac - 5GHz](https://docs.raspap.com/faq/#why-is-the-80211ac-5ghz-wireless-mode-option-disabled-in-configure-hotspot) wireless mode. It is generally much more stable and faster than the other options.

### Step 4 - Setup DNS

For the DNS server, we will use [1.1.1.1](https://1.1.1.1/), which is CloudFlare’s fast and private DNS server.

Go to DHCP Server > Advanced and add `1.1.1.1` as an upstream DNS server. Also, make sure that the option `Only ever query DNS servers configured below` is enabled, otherwise, your RaspAP network would still query your ISP DNS which we don’t want.

After this, test your setup on [DNS leak test](https://dnsleaktest.com/). This website will check if you've configured your DNS correctly. If you see any other DNS than Cloudflare’s, then it is wrong.

<aside data-warning>
  <p>Don't use Firefox for this test. Firefox uses <code>DNS over HTTPS</code> feature that works different way than classic DNS.</p>
</aside>

### Step 5 - Enable AdBlocking

AdBlocking should be on by default. On the `Ad Blocking` settings page, you can see if that's true.

### Step 6 - Setup VPN connection (optional)

The last step is setting up a permanent VPN connection between your RaspberryPi and NordVPN.

You will need an `.ovpn` configuration file. Go to [NordVPN servers](https://nordvpn.com/servers/tools/) website and pick a server of your choice.

<aside>
  <p>Prefer <code>OpenVPN UDP</code> over <code>OpenVPN TCP</code> option - it is generally faster.</p>
</aside>

After you get your config, go to the `OpenVPN` setting and upload it there. You will also need `Service credentials`. Those, you can get from your NordVPN account page.

<figure>
  <img 
    src="/blog-images/nord-vpn-account-page.png"
    alt="NordVPN account page" 
  />
  <figcaption>NordVPN account page</figcaption>
</figure>

After this step, you can hit `Save` and start your OpenVPN service.

If you did everything right, you can check [NordVPN.com](https://nordvpn.com) website and see in the top bar if you're connected through them.

<figure>
  <img
    src="/blog-images/nord-vpn-connected.png"
    alt="NordVPN website status check"
    style="max-width:400px"
  />
  <figcaption>NordVPN website status check</figcaption>
</figure>

## Conclusion

Congratulations. If you've made it this far, it means you care about your privacy. It is a good feeling to know that at your home no one is eavesdropping on you and your family.

I hope this mini-tutorial was helpful to you. Feel free to write me on my [Twitter](https://twitter.com/ondrejsevcik) if you have any questions or comments.

PS: If you find RaspAP useful, consider supporting this project with some $$$ on their [GitHub sponsors page](https://github.com/sponsors/RaspAP).
