# Integration Tests

The `@wesan-labs/levios-test-utils` package provides utility functions to create integration tests for your API routes and workflows.

For example:

```ts
import { leviosIntegrationTestRunner } from "@wesan-labs/levios-test-utils"

leviosIntegrationTestRunner({
  testSuite: ({ api, getContainer }) => {
    describe("Custom endpoints", () => {
      describe("GET /store/custom", () => {
        it("returns correct message", async () => {
          const response = await api.get(
            `/store/custom`
          )

          expect(response.status).toEqual(200)
          expect(response.data).toHaveProperty("message")
          expect(response.data.message).toEqual("Hello, World!")
        })
      })
    })
  }
})
```

Learn more in [this documentation](https://docs.leviosjs.com/learn/debugging-and-testing/testing-tools/integration-tests).
