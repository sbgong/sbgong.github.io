---
title: 面向对象
date: 2024-06-06 19:09:29
order: 2
---

## 方法

方法：方法就是完成特定功能的代码块。

```
// 方法定义方式一：有返回值
修饰符 返回值类型 方法名(参数类型 形参名1,参数类型 形参名2…) {
	函数体;
	return 返回值;
}
// 方法调用
返回值类型 返回值 = 方法名(实参名1, 实参名2);

// 方法定义方式二：无返回值
修饰符 void 方法名(参数类型 形参名1,参数类型 形参名2…) {
	函数体;
}
// 方法调用
方法名(实参名1, 实参名2);
```

方法注意事项：

- 方法必须定义在类中，在 Java 中最小的程序单元是类，必须先有类
- 一个类中可以定义多个方法
- 方法与方法是平级关系，不能嵌套定义
- 方法不调用不执行，方法的定义没有先后顺序
- 方法调用的时候不用再传递数据类型
- 方法定义的时候参数之间用逗号隔开
- 如果方法有明确的返回值，一定要有 return 带回一个值

### 方法重载：Overload

方法重载：指在同一个类中，允许存在一个以上的同名方法，只要它们的参数列表不同即可，与修饰符和返回值类型无关。

参数列表：参数个数不同，参数数据类型不同，参数顺序不同。

方法重载特点：

- 与返回值类型无关，只看方法名和参数列表
- 在调用时，虚拟机通过参数列表的不同来区分同名方法

```java
// 方法重载定义
public int sum(int a, int b) {
  return a + b;
}
public int sum(int a, int b, int c) {
  return a + b + c;
}
public int sum(float a, float b) {
  return a + b;
}

// 调用重载的方法
sum(10,20);
sum(10,20,30);
sum(10.5f,20.5f);
```

### 方法的参数传递机制

Java 的参数传递机制：值传递

- 基本类型的参数传输存储的数据值
- 引用类型的参数传输存储的地址值

在传输实参给方法的形参的时候，并不是传输实参变量本身， 而是传输实参变量中存储的值，这就是值传递。

- 实参：如在方法内部定义的变量
- 形参：如在定义方法时，`()` 中所声明的参数

## 面向对象思想

面向过程和面向对象都是对软件分析、设计和开发的一种思想，它指导着人们以不同的方式去分析、设计和开发软件。早期先有面向过程的思想，随着软件规模的扩大，问题复杂性的提高，面向过程的弊端越来越明显的显示出来，出现了面向对象思想并成为目前主流的方式。二者都贯穿于软件分析、设计和开发各个阶段，对应面向对象就分别称为面向对象分析（OOA）、面向对象设计（OOD）和面向对象编程（OOP）。C 语言是一种典型的面向过程的语言，Java 是一种典型的面向对象语言。

Java 是面向对象的高级语言，对于 Java 语言来说，万事万物皆对象！它的基本思想是使用类，对象，继承，封装，多态等基本概念进行程序设计。面向对象程序的最小单元是类，类代表了客观世界中具有某一特征的一类事物，封装了这类事物所具有的属性和行为。所以，**类 = 成员变量（属性）+ 方法（行为）**。

面向对象程序设计与人类的思维习惯一致，比如希望完成“兔子吃草”这件事。对比这两条语句可以看出，面向对象语句更接近自然语言语法，主谓宾一目了然。

- 在面向过程的程序设计里，一切以函数为中心，则会用如下语句来表达：`吃（兔子，草）`
- 而在面向对象程序设计里，一切以对象为中心，则会用如下语句来表达：`兔子.吃（草）`

## 类和对象

类是对象的抽象，对象则是类的实例。一个类可以生成多个对象。

- 类：是一组相关的属性和行为的集合
- 对象：是该类事物的具体体现

对一个类定义而言，包含三种最常见的成员：构造器、成员变量和方法。而构造器是一个类创建对象的根本途径，如果一个类没有构造器则无法创建实例。因此，如果程序员没有为一个类创建构造器，则系统会为该类提供一个默认无参的构造器。

```java
// 定义类
class 类名 {
  // 1.成员变量（普通变量、静态变量/类变量、常量、静态常量）
  // 2.成员方法（有返回值、无返回值）
  // 3.构造方法（无参构造、有参构造）
  // 4.代码块（构造代码块、静态代码块）
  // 5.内部类
}

// 创建对象
类名 对象名 = new 类名();

// 使用类中的成员变量
对象名.变量名;
// 使用类中的成员方法
对象名.方法名();
```

代码演示：

```java
// 定义类
class Person {
  String username;
  int age;

  public void eat(){
    System.out.println("eating~");
  }
}

Person p = new Person(); // 创建对象
System.out.println(p.username); // 调用对象中的成员属性
p.eat(); // 调用对象中的成员方法
```

创建对象在内存中做了哪些事情？在下面的代码中，`Student s = new Student();` 都做了哪些事情？

```java
class Student {
  private String name = "stu1";
  private int age = 18;

  public Student() {
    name = "stu2";
    age = 19;
  }
}
class StudentDemo {
  public static void main(String[] args) {
    Student stu = new Student();
  }
}
```

- 把 Student.class 字节码文件加载到内存
- 在栈内存 `stack` 中给变量 stu 开辟一个空间
- 在堆内存 `heap` 为学生对象申请一个空间
- 给成员变量进行默认初始化：`name: null; age: 0`
- 给成员变量进行显示初始化：`name=stu1; age: 18`
- 通过构造方法给成员变量进行初始化：`name=stu2; age: 19`
- 数据初始化完毕，然后把堆内存的地址值赋值给栈内存的变量 stu

## 封装

> 封装：是指隐藏对象的属性和实现细节，仅对外提供公共访问方式。

封装的实现步骤：

- 一般对成员变量使用 private（私有）关键字修饰进行隐藏，private 修饰后该成员变量就只能在当前类中访问
- 提供 public 修饰的公开的 getter、setter 方法暴露其取值和赋值

好处：隐藏实现细节，提供公共的访问方式，提高了代码的复用性，也加强了程序代码的安全性。

private 关键字：是一个权限修饰符。可以修饰成员（成员变量和成员方法）。被 private 修饰的成员只在本类中才能访问。

### 构造方法

> 构造方法：是用来给对象的数据进行初始化

```java
// 1.构造方法名与类名相同
// 2.没有返回值类型，连 void 都没有
// 3.没有具体的返回值

修饰符 构造方法名(参数列表){
  // 方法体
}
```

构造器的分类：

- 无参数构造器（默认存在的）：初始化的对象时，成员变量的数据均采用默认值
- 有参数构造器：在初始化对象的时候，同时可以为对象进行赋值

构造方法注意事项：

- 如果你不提供构造方法，系统会自动提供一个无参的构造方法
- 如果你提供了构造方法，系统将不再提供默认的无参构造方法。建议永远自己给出无参的构造方法
- 构造方法也是可以重载的

```java
class Person {
  private String username;
  private int age;
  // 无参构造方法
  public Person() {}
  // 带参构造方法
  public Person(String username, int age) {
    this.username = username;
    this.age = age;
  }
  public void show() {
    System.out.println("username=" + username + ";age=" + age);
  }
}
public class PersonTest {
  public static void main(String[] args) {
    Person p1 = new Person();
    Person p2 = new Person("zhangsan", 18);
    p1.show(); // username=null;age=0
    p2.show(); // username=zhangsan;age=18
  }
}
```

### this 关键字

> this 关键字：代表所在类的对象引用（代表当前对象的地址）

- 作用：出现在成员方法、构造器中代表当前对象的地址，用于访问当前对象的成员变量、成员方法
- this 的场景：解决局部变量隐藏成员变量

```java
class Student {
  private String name;
  private int age;

  public String getName() {
    return name; // 这里其实是隐含了 this
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}

class StudentTest2 {
  public static void main(String[] args) {
    // 创建一个对象
    Student s1 = new Student();
    s1.setName("林青霞");
    s1.setAge(27);
    System.out.println(s1.getName() + "---" + s1.getAge());

    // 创建第二个对象
    Student s2 = new Student();
    s2.setName("刘意");
    s2.setAge(30);
    System.out.println(s2.getName() + "---" + s2.getAge());
  }
}
```

![this关键字的内存图解](/svg/java/javase/oop/new-student.svg)

### static 关键字

> static 关键字可以修饰成员变量和成员方法

static 关键字特点：

- 随着类的加载而加载
- 优先于对象存在
- 被类的所有对象共享。这也是我们判断是否使用静态关键字的条件
- 可以通过类名调用

static 关键字注意事项：

- 在静态方法中是没有 this 关键字的
- 静态方法只能访问静态的成员变量和静态的成员方法

![static的内存图解](https://cdn.jsdelivr.net/gh/sbgong/static/blog/java/javase/intro/202404241027124.svg?raw)

### final 关键字

final 关键字是最终的意思，可以修饰类，成员变量，成员方法。

- final 关键字修饰类，则该类不能被继承
- final 关键字修饰方法，则该方法不能被重写/覆盖
- final 关键字修饰变量，则该变量就变成了常量，它只能被赋值一次，不能被重新赋值

```java
// final修饰类
final class Father {}
class Son extends Father{} // 报错；因为final修饰的类，不能被继承

// final修饰方法
class Father{
  public final void show(){}
}
class Son extends Father{
  public void show(){} // 报错；因为final修饰的方法，不能被重写
}

// final修饰变量
class Father{
  public int num1 = 10;
  public final int num2 = 20;
}
class Son extends Father{
  public void show() {
    num1 = 100; // 正常
    num2 = 200; // 报错；因为final修饰的变量，也就是常量，它是不能被再次赋值的
    final int num3 = 30; // final修饰局部变量（可以是基本数据类型，也可以是引用类型）
  }
}
```

### 工具类

- 类中的方法是静态的
- 类中的无参构造器设置为 private 私有的

## 继承

继承由来：多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那个类即可。

> 继承：就是子类继承父类的属性和行为，使得子类对象具有与父类相同的属性、相同的行为。子类可以直接访问父类中的非私有的属性和行为。

继承格式：通过 extends 关键字可以实现类与类的继承：`class 子类名 extends 父类名 {}`

单独的这个类称为父类，基类或者超类；这多个类可以称为子类或者派生类。有了继承以后，我们定义一个类的时候，可以在一个已经存在的类的基础上，还可以定义自己的新成员。继承描述的是事物之间的所属关系，这种关系是：`is-a` 的关系。例如，兔子属于食草动物，食草动物属于动物。可见，父类更通用，子类更具体。我们通过继承，可以使多种事物之间形成一种关系体系。

继承的格式和好处：

- 提高了代码的复用性：多个类相同的成员可以放到同一个类中，如果功能的代码需要修改，修改一处即可。
- 让类与类之间产生了关系，这是多态的前提。其实这也是继承的一个弊端：类的耦合性很强。

```java
class 父类 {
  ...
}

class 子类 extends 父类 {
  ...
}
```

### 继承的特点

- Java 只支持单继承，不支持多继承。一个类只能有一个父类，不可以有多个父类
- Java 支持多层继承（继承体系）
- 子类不能继承父类所有私有的成员（成员方法和成员变量）。其实这也体现了继承的另一个弊端：打破了封装性
- 子类不能继承父类的构造方法，但是可以通过 super 关键字去访问父类构造方法
- 子类中所有的构造方法默认都会访问父类中空参数的构造方法
  - 因为子类会继承父类中的数据，可能还会使用父类的数据。所以子类初始化之前，必须先完成父类数据的初始化
  - 子类的每一个构造方法的第一条语句默认都是：`super()`
- 子类重写父类方法时，子类的方法抛出的异常类型必须是和父类相同的异常或者是父类相同的异常的子类
- 如果被重写的方法没有异常抛出，那么子类的方法绝对不可以抛出异常。如果子类方法内有异常发生，那么子类只能 try 不能 throws。

### super 关键字

super 代表父类存储空间的标识（可以理解为父类引用）。注意：`super()` 或者 `this()` 必须出现在构造方法中的第一条语句。否则，就会有父类数据的多次初始化。

用法（this 和 super 均可如下使用）

- 访问父类的成员变量：`super.成员变量`
- 访问父类的构造方法：`super(…)`
- 访问父类的成员方法：`super.成员方法()`
- 访问本类的成员变量：`this.成员变量`
- 访问本类的构造方法：`this(…)`
- 访问本类的成员方法：`this.成员方法()`

```java
class Father {
  public int num = 10;

  public Father(){}
  public Father(num){
    this.num = num;
  }
}
class Son extends Father {
  public int num = 20;

  public Son(){}
  public Son(num){
    super(num);
  }

  public void show() {
    int num = 30;
    System.out.println(num); // 输出：30；局部变量
    System.out.println(this.num); // 输出：20；Son中的成员变量
    System.out.println(super.num); // 输出：10；Father中的成员变量
  }
}
```

### 方法重写：Override

方法重写：子类中出现了和父类中一模一样的方法声明，也被称为方法覆盖，方法复写。

方法重写的应用：当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法，这样，即沿袭了父类的功能，又定义了子类特有的内容。

方法重写的注意事项：

- 父类中私有方法不能被重写，因为父类私有方法子类根本就无法继承。
- 子类重写父类方法时，访问权限不能更低。子类方法的访问权限必须高于父类的访问权限，最好父子类的方法访问权限一致。
- 父类静态方法，子类也必须通过静态方法进行重写。
  - 其实这个算不上方法重写，但是现象确实如此。
  - 至于为什么算不上方法重写，因为静态和类相关，算不上重写，所以在多态中的静态方法，访问的是父类的。

## 多态

> 多态：是指同一行为，具有多个不同表现形式。举例：`动物 d = new 猫();`

多态前提和体现：

- 有继承关系
  - 具体类多态（几乎没有）
  - 抽象类多态（常用）
  - 接口多态（最常用）
- 有方法重写（意义体现：不重写，无意义）
- 有父类引用指向子类对象（格式体现）

```java
// 多态体现的格式
父类类型 变量名 = new 子类对象；
变量名.方法名();

// 案例演示
Father f = new Son();
f.method();
// 当使用多态方式调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误；如果有，执行的是子类重写后方法
```

多态中成员访问的特点：

- 成员变量：编译看左边，运行看左边
- 成员方法：编译看左边，运行看右边（由于成员方法存在方法重写，所以它运行是看右边）
- 静态方法：编译看左边，运行看左边（静态和类相关，算不上重写，所以访问还是看左边）
- 构造方法：创建子类对象的时候，访问父类的构造方法，对父类的数据进行初始化

```java
class People{
  public int num = 10;
  public int show() {
    return 100;
  }
  public static int test(){
    reutnr 1000;
  }
}
class Man extends People{
  public int num = 20;
  public int show() {
    return 200;
  }
  public static int test(){
    reutnr 2000;
  }
}

public static void main(String[] args) {
  People p = new Man();
  System.out.println(p.num);    // 多态形式访问成员变量：输出 10
  System.out.println(p.show()); // 多态形式访问成员方法：输出 200
  System.out.println(p.test()); // 多态形式访问静态方法：输出 1000
}
```

### 多态优缺点

多态的好处：

- 提高了程序的维护性(由继承保证)
- 提高了程序的扩展性(由多态保证)

**多态的弊端：不能访问子类特有功能。那么我们如何才能访问子类的特有功能呢？多态中的转型（向下转型）**

### 多态中的转型问题

- 向上转型：从子到父；父类引用指向子类对象
- 向下转型：从父到子；父类引用转为子类对象

```java
// 向上转型
父类类型 变量名 = new 子类类型();
Animal a = new Cat();

// 向下转型
子类类型 变量名 = (子类类型) 父类变量名;
Cat c =(Cat) a;
```

== instanceof 关键字
转型的过程中，一不小心就会遇到这样的问题，请看如下代码：

```java
public class Test {
  public static void main(String[] args) {
    // 向上转型
    Animal a = new Cat();
    a.eat(); // 调用的是 Cat 的 eat

    // 向下转型
    Dog d = (Dog)a;
    d.watchHouse(); // 调用的是 Dog 的 watchHouse 【运行报错】
  }
}
```

这段代码可以通过编译，但是运行时，却报出了 ClassCastException ，类型转换异常！这是因为，明明创建了 Cat 类型对象，运行时，当然不能转换成 Dog 对象的。这两个类型并没有任何继承关系，不符合类型转换的定义。

为了避免 ClassCastException 的发生，Java 提供了 `instanceof` 关键字，给引用变量做类型的校验，格式如下：`变量名 instanceof 数据类型`。

- 如果变量属于该数据类型，返回 true
- 如果变量不属于该数据类型，返回 false

所以，转换前，我们最好先做一个判断，代码如下：

```java
public class Test {
  public static void main(String[] args) {
    // 向上转型
    Animal a = new Cat();
    a.eat(); // 调用的是 Cat 的 eat

    // 向下转型
    if (a instanceof Cat){
      Cat c = (Cat)a;
      c.catchMouse(); // 调用的是 Cat 的 catchMouse
    } else if (a instanceof Dog){
      Dog d = (Dog)a;
      d.watchHouse(); // 调用的是 Dog 的 watchHouse
    }
  }
}
```

### 接口由来

接口的由来：继续回到我们的猫狗案例，我们想想狗一般就是看门，猫一般就是作为宠物了，对不。但是，现在有很多的驯养员或者是驯兽师，可以训练出：猫钻火圈，狗跳高，狗做计算等。而这些额外的动作，并不是所有猫或者狗一开始就具备的，这应该属于经过特殊的培训训练出来的，对不。所以，这些额外的动作定义到动物类中就不合适，也不适合直接定义到猫或者狗中，因为只有部分猫狗具备这些功能。所以，为了体现事物功能的扩展性，Java 中就提供了接口来定义这些额外功能，并不给出具体实现，将来哪些猫狗需要被培训，只需要这部分猫狗把这些额外功能实现即可。

接口是一种约定规范，是多个**抽象方法**的集合。仅仅只是定义了应该有哪些功能，本身不实现功能，至于每个功能具体怎么实现，就交给实现类完成。

接口中的方法是抽象方法，并不提供功能实现，**体现了规范和实现相分离的思想**，也体现了组件之间低耦合的思想。

### 接口使用

接口的定义，它与定义类方式相似，但是使用 `interface` 关键字。它也会被编译成 .class 文件，但一定要明确它并不是类，而是另外一种引用数据类型。

- 接口特点：接口用关键字 `interface` 表示。接口格式：`interface 接口名 {}`
- 类实现接口用 `implements` 表示。接口实现格式：`class 类名 implements 接口名 {}`
- 接口不能直接实例化。那么，接口如何实例化呢？按照多态的方式，由具体的子类实例化。其实这也是多态的一种，接口多态。
- 接口的子类
  - 可以是抽象类，但意义不大。因为接口的实现类就是用来实现接口中定义的抽象方法的，现在继续定义为抽象类，意义不大
  - 可以是具体类/接口实现类。它需要重写接口中的所有抽象方法（推荐方案）

```java
public interface 接口名称 {
  // 静态常量（JDK7及以前）
  // 抽象方法（JDK7及以前）：使用 abstract 关键字修饰，可以省略，没有方法体。该方法供子类实现使用
  // 默认方法（JDK8）：使用 default 修饰，不可省略，供子类调用或者子类重写
  // 静态方法（JDK8）：使用 static 修饰，供接口直接调用；只能使用接口名调用，不可以通过实现类的类名或者实现类的对象调用
  // 私有方法（JDK9）：使用 private 修饰，供接口中的默认方法或者静态方法调用
}
```

### 接口成员特点

- 成员变量：接口中的成员变量只能是常量，并且是静态的
  - 也就是说，接口中的变量，默认修饰符都是：`public static final`
- 成员方法：接口中的成员方法只能是抽象方法
  - 也就是说，接口中的方法，默认修饰符都是：`public abstract`
- 构造方法：接口中没有构造方法。因为接口主要是用来做扩展功能的，而没有具体存在
- 接口中，没有静态代码块

```java
interface Jumping {
  int num; // 变量 num，其实是一个静态常量，它省略了 public static final 修饰符
  void test(); // 方法 test，其实是一个抽象的公共方法，它省略了 public abstract 修饰符
}
```

抽象类和接口的设计理念区别：

- 抽象类：被继承体现的是"is-a"的关系。抽象类中定义的是该继承体系的共性功能
- 接口：被实现体现的是"like-a"的关系。接口中定义的是该继承体系的扩展功能

### 类-接口之间的关系

类与类、类与接口以及接口与接口的关系：

- 类与类：继承关系，只能单继承，但是可以多层继承
- 类与接口：实现关系，可以单实现，也可以多实现。还可以在继承一个类的同时实现多个接口
- 接口与接口：继承关系，可以单继承，也可以多继承

```java
// 类与类之间的关系：单继承
class Father {}
class Son extends Father{}

// 类与接口之间的关系：实现关系；可以单实现，也可以多实现，还可以继承其他类
interface InterfaceName1 {
  public abstract void method1();
}
interface InterfaceName2 {
  public abstract void method2();
}
class InterfaceNameImpl extends Object implements InterfaceName1, InterfaceName2 {
  public void method1(){}
  public void method2(){}
}

// 接口与接口之间的关系：继承关系；可以单继承，也可以多继承
interface InterfaceName1 {
  public abstract void method1();
}
interface InterfaceName2 {
  public abstract void method2();
}
interface InterfaceName extends InterfaceName1, InterfaceName2 {
}
```

## 抽象类

::: tabs
== 抽象类的由来
回想前面我们的猫狗案例，提取出了一个动物类。并且我们在前面也创建过了动物对象，其实这是不对的。为什么呢?因为，我说动物，你知道我说的是什么动物吗?只有看到了具体的动物，你才知道，这是什么动物。 所以说，动物本身并不是一个具体的事物，而是一个抽象的事物。只有真正的猫，狗才是具体的动物。同理，我们也可以推想，不同的动物吃的东西应该是不一样的，所以，我们不应该在动物类中给出具体体现，而是应该给出一个声明即可。
== 抽象类的使用
在 Java 中，一个没有方法体的方法应该定义为抽象方法，而类中如果有抽象方法，该类必须定义为抽象类。

- 抽象方法：没有方法体的方法
  - 使用 abstract 关键字修饰方法，该方法就成了抽象方法，抽象方法只包含一个方法名，而没有方法体
  - 定义格式：`修饰符 abstract 返回值类型 方法名 (参数列表);`
- 抽象类：包含抽象方法的类
  - 如果一个类包含抽象方法，那么该类必须是抽象类
  - 定义格式：`abstract class 类名 {}`

抽象的使用：继承抽象类的子类必须重写父类所有的抽象方法。否则，该子类也必须声明为抽象类。最终，必须由子类实现该父类的抽象方法，否则，从最初的父类到最终的子类都不能创建对象，失去意义。
== 抽象代码案例

```java
// 定义抽象类（有抽象方法的类，一定是抽象类；一个抽象类，可以没有抽象方法）
abstract class Animal {
  public abstract void eat(); // 定义抽象方法
}
// 继承了一个抽象父类，第一种解决方法：实现抽象父类的抽象方法
class Dog extends Animal {
  public void eat() {
    ……
  }
}
// 继承了一个抽象父类，第二种解决方法：不实现抽象父类的抽象方法，继续将子类定义为抽象类
abstract class Cat extends Animal {
  ……
}
```

== 抽象类的特点

- 抽象类和抽象方法必须用 abstract 关键字修饰
- 抽象类不一定有抽象方法，有抽象方法的类一定是抽象类
- 抽象类不能实例化。因为抽象类不是具体的。如果创建，编译无法通过而报错。只能创建其非抽象子类的对象
  - 抽象类中，可以有构造方法，但是不能实例化。因为构造方法是供子类创建对象时，初始化父类成员使用的
- 抽象类的子类
  - 方法一：如果不想重写抽象方法，该子类应该继续声明为一个抽象类
  - 方法二：重写所有的抽象方法，这个时候子类就是一个具体的类，可以被实例化了

抽象类的实例化其实是靠具体的子类实现的，这是多态的方式。`Animal a = new Cat();`
== 抽象类的成员特点

- 成员变量：既可以是普通变量，也可以是常量
- 构造方法：抽象类中有构造方法，它是用于子类访问父类数据的初始化
- 成员方法
  - 既可以是抽象的（限定子类必须完成某些动作）
  - 也可以是非抽象的（子类继承的事情，提高代码复用性）

== abstract 关键字不能和哪些关键字共存

- `private`：冲突；抽象方法就是用来给子类实现的，设为 private，则子类无法访问
- `final`：冲突；抽象方法就是用来给子类实现的，设为 final，则子类无法重新赋值
- `static`：无意义；static 修饰的方法是用来供类名直接调用的（类名.方法名()的方式），但抽象方法没有方法体，所以这么调用无意义

:::

## 内部类

::: tabs
== 内部类
内部类：把类定义在其他类的内部，这个类就被称为内部类。举例：在类 A 中定义了一个类 B，类 B 就是内部类。

内部类的访问特点：

- 内部类可以直接访问外部类的成员，包括私有
- 外部类要访问内部类的成员，必须创建对象

```java
class Outer {
  private int num = 10;
  class Inner {
    public void show() {
        System.out.println(num); // 内部类访问外部类的私有变量
    }
  }
  public void method() {
    Inner i = new Inner();
    i.show(); // 外部类访问内部类的方法
  }
}
```

== 内部类分类
按照内部类在类中定义的位置不同，可以分为如下两种格式：

- 成员位置(成员内部类)
- 局部位置(局部内部类)

```java
class Outer {
  // 成员内部类：在成员位置的内部类
  class Inner{
    public void show(){}
  }

  public void method(){
    // 局部内部类：在局部位置的内部类
    class Inner{}
  }
}
```

== 成员内部类
外界如何访问内部类的成员：`外部类名.内部类名 对象名 = 外部类对象.内部类对象;`

```java
class Outer {
  private int num = 10;
  class Inner{
    public void show(){
      System.out.println(num);
    }
  }
}
// 如何直接访问内部类的成员：成员内部类的案例
public static void main(String[] args) {
  Outer.Inner oi = new Outer().new Inner();
  oi.show();
}
```

成员内部类的使用，但是一般来说，在实际开发中是不会这样使用的。因为一般内部类就是不让外界直接访问的。

```java
// 举例讲解这个问题：Body 和 Heart。案例：一个人有身体，身体内有心脏
class Body {
  private class Heart { // 加了 private 之后，这个class就不能被外界直接创建对象使用了
    public void operator() {
      System.out.println("心脏搭桥");
    }
  }
  public void method() {
    if(如果你是外科医生) {
      Heart h = new Heart();
      h.operator();
    }
  }
}
// 如何直接访问内部类的成员：私有成员内部类的案例
public static void main(String[] args) {
  // Body.Heart bh = new Body().new Heart(); // 内部类是private，所以不能被外界创建对象使用了
  Body b = new Body(); // 私有内部类只能通过外部类对外提供的方法间接调用使用
  b.method();
}
```

成员内部的常见修饰符：

- private：为了保证数据的安全性
- static：为了让数据访问更方便
  - 被静态修饰的成员内部类只能访问外部类的静态成员
  - 如何直接访问内部类的成员的格式：`外部类名.内部类名 对象名 = new 外部类名.内部类名();`

```java
class Outer {
  private int num1 = 10;
  private static int num2 = 20;

  public static class Inner {
    // 静态内部类中可以存在非静态方法
    public void show1() {
      System.out.println(num1); // 报错：静态内部类无法访问外部类中的非静态成员
      System.out.println(num2); // 正常：静态内部类只能范文外部类中的静态成员
    }
    // 静态内部类中可以存在静态方法
    public static void show2() {
      System.out.println(num1); // 报错：静态内部类无法访问外部类中的非静态成员
      System.out.println(num2); // 正常：静态内部类只能范文外部类中的静态成员
    }
  }
}

// 如何直接访问内部类的成员：静态成员内部类的案例
public static void main(String[] args) {
  Outer.Inner oi = new Outer.Inner();
  oi.show1(); // 调用静态内部类中的非静态方法
  Outer.Inner.show2(); // 调用静态内部类中的静态方法
}
```

== 局部内部类

- 局部内部类可以直接访问外部类中的成员
- 在局部位置，可以直接创建内部类的对象，通过对象调用内部类的方法，来使用局部内部类功能
- 注意：局部内部类访问局部位置上的局部变量，该局部变量必须使用 final 修饰
  - 原因：局部变量是随着方法的调用而调用，随着方法调用完毕而小时。而堆内存中的内部类内容并不会立即消失，它会等待 GC 来回收
  - 如果在局部位置上的变量没有加 final 修饰，此时该变量就消失不见了。内部类中无法对其进行操作
  - 如果在局部位置上的变量加上了 final 修饰，这样在堆内存里面存储的其实是一个常量值，和消失的变量再无关系

```java
class Outer {
  private int num1 = 10;

  public void method() {
    final int num2 = 20;
    class Inner {
      public void show() {
        System.out.println(num1); // 局部内部类可以直接访问外部类中的变量
        System.out.println(num2); // 局部内部类访问局部变量必须使用 final修饰
      }
    }
    Inner i = new Inner(); // 在局部位置创建内部类对象
    i.show(); // 在局部位置调用内部类对象的方法
  }
}

// 如何直接访问内部类的成员：局部内部类的案例
public static void main(String[] args) {
  Outer o = new Outer();
  o.method();
}
```

== 匿名内部类
匿名内部类就是内部类的简化写法。前提：存在一个类或者接口，这里的类可以是具体类也可以是抽象类。

匿名内部类的格式：`new 类名或者接口名() {重写方法;}`

匿名内部类的本质是一个继承了类或者实现了接口的子类匿名对象。

```java
interface Inter {
  public abstract void show1();
  public abstract void show2();
}
class Outer {
  public void method() {
    // 定义一个匿名内部类对象
    new Inter() {
      public void show1(){}
      public void show2(){}
    };
    // 调用匿名内部类中的方法
    new Inter() {
      public void show1(){}
      public void show2(){}
    }.show1();
  }
}
// 如何直接访问内部类的成员：匿名内部类的案例
public static void main(String[] args) {
  Outer o = new Outer();
  o.method();
}
```

== 匿名内部类在开发中的使用

```java
// 方式一：非匿名内部类在开发中的使用
interface Person {
  public abstract void study();
}
class Student implements Person {
  public void study(){
    System.out.println("study~");
  }
}
class PersonDemo {
  public void method(Person p) {
    p.study();
  }
}

public static void main(String[] args) {
  PersonDemo pd = new PersonDemo();
  Person p = new Student();
  pd.method(p);
}

// 方式二：匿名内部类在开发中的使用
interface Person {
  public abstract void study();
}
class PersonDemo {
  public void method(Person p) {
    p.study();
  }
}

public static void main(String[] args) {
  PersonDemo pd = new PersonDemo();
  pd.method(new Person() {
    public void study() {
      System.out.println("study~");
    }
  });
}
```

== 面试题

```java
// Q：要求请填空分别输出 30,20,10
class Outer {
  public int num = 10;
  class Inner {
    public int num = 20;
    public void show() {
      int num = 30;
      System.out.println(num); // 30
      System.out.println(this.num); // 20
      System.out.println(Outer.this.num); // 10：方式一
      System.out.println(new Outer().num); // 10：方式二
    }
  }
}

public static void main(String[] args) {
  Outer.Inner oi = new Outer().new Inner();
  oi.show();
}
```

:::
