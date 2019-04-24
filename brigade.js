const { events, Job } = require("brigadier");
events.on("simpleevent", (e, p) => {
  var job = new Job("the-demo", "alpine:3.8");
  f = JSON.parse(e.payload)
  job.tasks = [
    "echo Hello " + f.f,
    "echo Im " + p.name
  ];

  job.run();
});
