1. Datat Structures Overview

import java.util.*;

public class Olympics {

	public static void main(String[] args) {

		//Some Olympic sports 

		ArrayList<String> olympicSports = new ArrayList<String>();
		olympicSports.add("Archery");
		olympicSports.add("Boxing");
		olympicSports.add("Cricket");
		olympicSports.add("Diving");

		System.out.println("There are " + olympicSports.size() + " Olympic sports in this list. They are: ");

		for (String sport: olympicSports) {
			System.out.println(sport);
		}

		//Host cities and the year they hosted the summer Olympics

		HashMap<String, Integer> hostCities = new HashMap<String, Integer>();

		hostCities.put("Beijing", 2008);
		hostCities.put("London", 2012);
		hostCities.put("Rio de Janeiro", 2016);

		for (String city: hostCities.keySet()) {
			
			if (hostCities.get(city) < 2016) {

				System.out.println(city + " hosted the summer Olympics in " + hostCities.get(city) + ".");

			} else {

				System.out.println(city + " will host the summer Olympics in " + hostCities.get(city) + ".");

			}
		}

	}

}

2. For Loop

public class For {
	public static void main(String[] args) {

		for (int waterLevel = 0; waterLevel < 7; waterLevel++){

			System.out.println("The pool's water level is at " + waterLevel + " feet.");

		}

	}

}

3. ArrayList

import java.util.ArrayList;

public class Temperatures {

	public static void main(String[] args) {
		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();

	}
}

4. ArrayList: Manipulation

import java.util.ArrayList;

public class Temperatures {

	public static void main(String[] args) {
		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
    weeklyTemperatures.add(67);
    weeklyTemperatures.add(89);
    weeklyTemperatures.add(94);
	}
}

5. ArrayList: Access

import java.util.ArrayList;

public class Temperatures {

	public static void main(String[] args) {
		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
    weeklyTemperatures.add(67);
    weeklyTemperatures.add(89);
    weeklyTemperatures.add(94);

    System.out.println( weeklyTemperatures.get(1) );
	}
}

6. ArrayList: Insertion

import java.util.ArrayList;

public class TemperaturesB {

	public static void main(String[] args) {

		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
		weeklyTemperatures.add(67);
		weeklyTemperatures.add(89);
		weeklyTemperatures.add(94);

    weeklyTemperatures.add(2, 111);
    System.out.println( weeklyTemperatures.get(3) );
	}
}

7. Iterating over an ArrayList

import java.util.ArrayList;

public class TemperaturesC {

	public static void main(String[] args) {

		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
		weeklyTemperatures.add(67);
		weeklyTemperatures.add(89);
		weeklyTemperatures.add(94);
		weeklyTemperatures.add(2, 111);

		for(int j=0; j<weeklyTemperatures.size(); j++){
      System.out.println( weeklyTemperatures.get(j) );
    }
  }
}


8. For Each Loop
import java.util.ArrayList;

public class TemperaturesForEach {
	public static void main(String[] args) {

		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
		weeklyTemperatures.add(67);
		weeklyTemperatures.add(89);
		weeklyTemperatures.add(94);

		for (Integer temperature : weeklyTemperatures) {
			System.out.println(temperature);
		}

	}
}
import java.util.ArrayList;

public class TemperaturesForEach {
	public static void main(String[] args) {

		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
		weeklyTemperatures.add(67);
		weeklyTemperatures.add(89);
		weeklyTemperatures.add(94);

		for (Integer temperature : weeklyTemperatures) {
			System.out.println(temperature);
		}

	}
}

9. HashMap

import java.util.HashMap;

public class Restaurant {
	public static void main(String[] args) {

	HashMap<String, Integer> restaurantMenu = new HashMap<String, Integer>();

	}
}

10. HashMap: Manipulation

import java.util.HashMap;

public class Restaurant {
	public static void main(String[] args) {

	HashMap<String, Integer> restaurantMenu = new HashMap<String, Integer>();
		restaurantMenu.put("Turkey Burger", 13);
    restaurantMenu.put("Naan Pizza", 11);
    restaurantMenu.put("Cranberry Kale Salad", 10);
	}
}

11. HashMap: Access

import java.util.HashMap;

public class Restaurant {
	public static void main(String[] args) {

	HashMap<String, Integer> restaurantMenu = new HashMap<String, Integer>();
		restaurantMenu.put("Turkey Burger", 13);
    restaurantMenu.put("Naan Pizza", 11);
    restaurantMenu.put("Cranberry Kale Salad", 10);

    System.out.println( restaurantMenu.get("Naan Pizza"));
	}
}

12. Iterating over a HashMap


import java.util.HashMap;

public class RestaurantForEach {
	public static void main(String[] args) {

		HashMap<String, Integer> restaurantMenu = new HashMap<String, Integer>();

		restaurantMenu.put("Turkey Burger", 13);
		restaurantMenu.put("Naan Pizza", 11);
		restaurantMenu.put("Cranberry Kale Salad", 10);

		System.out.println(restaurantMenu.size());
		for (String item : restaurantMenu.keySet()) {

			System.out.println("A " + item + " costs " + restaurantMenu.get(item) + " dollars.");

		}
	}
}

13. Generalizations

import java.util.*;

public class GeneralizationsD {
	public static void main(String[] args) {
		ArrayList<String> sports = new ArrayList<String>();
		sports.add("Football");
    sports.add("Boxing");


		for(String sport : sports) {
			System.out.println(sport);
		}

		//Major cities and the year they were founded
		HashMap<String, Integer> majorCities = new HashMap<String, Integer>();

		majorCities.put("New York", 1624);
		majorCities.put("London", 43);
		majorCities.put("Mexico City", 1521);
		majorCities.put("Sao Paulo", 1554);

		for ( String city : majorCities.keySet() ) {

			System.out.println(city + " was founded in " + majorCities.get(city));

		}
	}
}
