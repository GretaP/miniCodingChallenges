/*
Codewars: Isograms, https://www.codewars.com/kata/isograms/train/csharp/5c64e381d8b7570017ce9eb9
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.

isIsogram "Dermatoglyphics" == true
isIsogram "moose" == false
isIsogram "aba" == false

*/

/*
Personal comments: original refactor simply got rid of variables.  Used this to remember C# syntax.

wanted to do the following instead, but will need to  work on that later
return str.ToLower().ToCharArray().Distinct().Count() == str.ToLower().ToCharArray.Count();

*/





using System;

public class Kata
{
  public static bool IsIsogram(string str)
  {
      string chars = "";
      foreach (var ch in str.ToLower())
        {
    // (remember contains is a boolean)
        if (chars.Contains(ch) == true){return false;}
        chars += ch;
        }
      return true;
  }
}
