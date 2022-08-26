function FindProxyForURL(url, host) {

    // If the hostname matches, send direct.
        if (dnsDomainIs(host, "ifconfig.me"))
            return "PROXY 10.165.21.101:3128";
        if (dnsDomainIs(host, "teias.gov.tr"))
            return "PROXY 10.165.21.101:3128";
        if (isInNet(dnsResolve(host), "10.165.33.0", "255.255.255.0"))
            return "PROXY 10.165.21.101:3128";
        return "DIRECT";
    
    }
