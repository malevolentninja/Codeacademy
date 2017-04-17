Object-Orientated Java

// 1. Object-Orientated Overview 

public class Mouse extends Rodentia {

	String name;

	public Mouse(String name) {

		this.name = name;

	}

	public void eat() {

		System.out.println(name + " ate some cheese pizza!");

	}

	public void solveMaze(int minutes) {

		System.out.println(name + " solved the maze in " + minutes + " minutes!");

	}

	public static void main(String[] args) {

		Mouse ratly = new Mouse("Ratly");
		ratly.eat();
		ratly.solveMaze(3);
		ratly.order();

	}

}

// 2. Classes: Syntax

class Dog {


	public static void main(String[] args) {

	}
}

// 3. Classes: Constructors

class Dog {
  int age;
	public Dog(){

  }
	public static void main(String[] args) {

	}
}

// 4. Classes: Instance Variables 

class Dog {
  int age;
	public Dog(){

  }
	public static void main(String[] args) {

	}
}

// 5. Classes: Constructor Parameters

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
	public static void main(String[] args) {

	}
}

// 6. The main Method

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
	public static void main(String[] args) {

	}
}
// just reviewing the main method, same code as part 5

// 7. Objects 

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
	}
}

// 8. Methods: I

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
	}
}

// 9. Using Methods: I

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
    spike.bark();
	}
}

// 10. Methods: II

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
  public void run(int feet){
    System.out.println("Your dog ran " + feet + " feet!");
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
    spike.bark();
    spike.run(12);
	}
}


// 11. Using Methods: II

class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
  public void run(int feet){
    System.out.println("Your dog ran " + feet + " feet!");
  }
  public int getAge(){
    return age;
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
    spike.bark();
    spike.run(12);
    int spikeAge = spike.getAge();
    System.out.println(spikeAge);

	}


// 12. Inheritance

class Dog extends Animal{
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
  public void run(int feet){
    System.out.println("Your dog ran " + feet + " feet!");
  }
  public int getAge(){
    return age;
  }
	public static void main(String[] args) {
    Dog spike = new Dog(8);
    spike.bark();
    spike.run(12);
    int spikeAge = spike.getAge();
    System.out.println(spikeAge);
		spike.checkStatus();
	}
}


// 13. Generalizations

