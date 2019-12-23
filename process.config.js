module.exports = {
  apps: [
    {
      name: "notesserver",
      script: "./notesserver.js",
      watch: true,
      instances: 2,
      exec_mode: "cluster",
      ignore_watch : ["node_modules"],
    },
    {
      name: "fileServer",
      script: "./fileServer.js",
      watch: true,
      ignore_watch : ["node_modules"],
    },

    {
      name: "authserver",
      script: "./authserver.js",
      watch: true,
      ignore_watch : ["node_modules"],
    },
    {
      name: "gateway",
      script: "./gateway.js",
      watch: true,
      ignore_watch : ["node_modules"],
    },
  ]
}