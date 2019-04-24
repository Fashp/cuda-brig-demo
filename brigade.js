const { events, Job } = require("brigadier");
events.on("simpleevent", (e, p) => {
  var job = new Job("the-demo", "alpine:3.8");
  env_vars = JSON.parse(e.payload)
  job.tasks = [
    "echo Hello " + f.text,
	"echo Im " + p.name
  ];

  job.run();
});
