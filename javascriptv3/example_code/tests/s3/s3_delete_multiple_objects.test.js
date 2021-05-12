const { run, bucketParams } = require("../../s3/src/s3_delete_multiple_objects");
const { s3 } = require("../../s3/src/libs/s3Client");

jest.mock("../../s3/src/libs/s3Client.js");

describe("@aws-sdk/client-s3 mock", () => {
  it("should successfully mock s3 client", async () => {
    s3.send.mockResolvedValue({ isMock: true });
    const response = await run(bucketParams);
    expect(response.isMock).toEqual(true);
  });
});
