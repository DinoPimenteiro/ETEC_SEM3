using System;

class Program
{
  static void Algo(string a)
  {
    Console.WriteLine(a);
  }

  static void Algo(int a, int b)
  {
    Console.WriteLine(a + b);
  }

  static void Algo(bool teste)
  {
    Console.WriteLine("A resposta é: " + teste);
  }

  static void Main()
  {
    Algo("asd");
    Algo(2, 4);
    Algo(true);
  }
}
