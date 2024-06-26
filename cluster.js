import os from "os";
import cluster from "cluster";

if (cluster.isPrimary) {
	const CPUs = os.cpus().length;

	for (let i = 0; i < CPUs; i++) {
		cluster.fork();
	}
	console.log(`Available CPUs: ${CPUs}`);

	cluster.on("online", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} is online`);
	});
	cluster.on("exit", (worker, code, signal) => {
		console.log(`${worker.process.pid} has exited`);
		cluster.fork();
	});
} else {
	import("./server.js"); 
}
