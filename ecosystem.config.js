module.exports = {
  apps : [{
    name   : "api-guest",
    interpreter : "ts-node",
    script : "./src/app.ts",
    instances: "1",
    watch: true
  }]
}
