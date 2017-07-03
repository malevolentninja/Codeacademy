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

6. ArrayList: Insertion

7. Iterating over an ArrayList

8. For Each Loop

9. HashMap

10. HashMap: Manipulation

11. HashMap: Access

12. Iterating over a HashMap

13. Generalizations
