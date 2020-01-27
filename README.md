# Vizydrop custom app with timezone support

## Steps to add timezone support
- [Add timezone feature to app config](https://github.com/vizydrop/node-simple-app-with-timezone/blob/master/app.config.js#L29)
- [Implement [POST] /timezone](https://github.com/vizydrop/node-simple-app-with-timezone/blob/master/timezone-custom-app.js#L27)

## Timezone & date filter
Timezone that is returned from /timezone endpoint is applied on date filter.
For example, if timezone is '+03:00', min & max dates in date range will be in '+03:00' also (e.g. 2019-10-30T00:00:00.000+03:00)
