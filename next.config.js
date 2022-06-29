const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  env: {
    publicSpaceID: 's1duq6dg4nro',
    publicAccessToken: 'NCDCN63qD-9ucOF0Mt5xbdV3U8JmpXE5V500RFnJazM',
  }
  // CFPAT-wkJekmWGpwN-7xEwWK6KqPajgtzi9RP8SPAfi-UZzTs
  // NCDCN63qD - 9ucOF0Mt5xbdV3U8JmpXE5V500RFnJazM
}

module.exports = withBundleAnalyzer(config)
