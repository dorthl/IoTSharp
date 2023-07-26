using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace IoTSharp.Test
{

  [TestClass]
  public class TestIoTSharp
  {


    [TestInitialize]
    public void Initialize()
    {

    }

    [TestMethod]
    public async Task TestAsync()
    {
      await using var application = new WebApplicationFactory<IoTSharp.Startup>();
      using var client = application.CreateClient();

      var response = await client.GetAsync("/weatherforecast");

    }
  }
}
