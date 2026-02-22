// Uncomment this file to enable instrumentation and observability using OpenTelemetry
// Refer to the docs for installation instructions: https://docs.leviosjs.com

// import { registerOtel } from "@wesan-labs/levios"
// // If using an exporter other than Zipkin, require it here.
// import { ZipkinExporter } from "@opentelemetry/exporter-zipkin"

// // If using an exporter other than Zipkin, initialize it here.
// const exporter = new ZipkinExporter({
//   serviceName: 'my-levios-project',
// })

// export function register() {
//   registerOtel({
//     serviceName: 'levios',
//     // pass exporter
//     exporter,
//     instrument: {
//       http: true,
//       workflows: true,
//       query: true
//     },
//   })
// }