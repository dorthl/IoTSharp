﻿namespace IoTSharp.Controllers.Models
{

  public class MappingItem
  {
    public string Source { get; set; }

    public string Target { get; set; }
  }
  public class BaiduTranslateResult
  {
    public string from { get; set; }
    public string to { get; set; }

    public TranslateResult[] trans_result { get; set; }
  }


  public class TranslateResult
  {
    public string src { get; set; }
    public string dst { get; set; }
  }

  public class AssetProfile
  {

    public string Value { get; set; }
  }
}
