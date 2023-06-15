// 1.**Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

"Psudo Code"
//Create a class eg.class Ancestral_Stories, add a constructor cointaining the attributes
// then create the methods that will help you in knowing the age group and the story
//the storyTeller and translator based on the age group.

class Ancestral_Stories {
    constructor(name,storyTeller,translator){
        this.name=name,
        this.storyTeller=storyTeller,
        this.Translator=translator
    }
    getTranslation(){
        let max_age=35
        let min_age=5

        for(let x=0;x> max_age.length;x++){
            if(age > max_age){
console.log("You are now elidgible for story telling")
            }
            else if(age === 20 && 34){
                console.log("You are still patt of the group for listening to Story ")
            }
            else{
                console.log("null")
            }
        }
            for(let y=0;y<min_age;y_++) {
                if(age === 5&& 10){
                console.log("You are limited to educational stories of behaviours and respect")
                }
                else if(age ===35){
                    console.log("You are responsible for translating to the young kids ")
                }
            }
            
        }
}



// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.
// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
  "Psudo code"

  //create a class eg class Product and a constuctor containing attributes such as name
  //create a objects for the different  products and calculate their total prices

  class Product{
    constructor(name,price,quantity){
        this.name=name,
        this.price=price,
        this.quantity=quantity
    }
    calculate_TotalPrice(products){
        total=this.price*this.quantity
        return total
    }
  }

  let products=["rice ,180,2","cabbage ,250,6","flour ,1000,4"]
  console.log(calculate_TotalPrice(products));


// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.

"Psudo Code"
//create a class Strudent with the attriutes name age and grades.create methods that will help you know if the 
//student has passed or not and a method for calculating the total grades a student has to determine whether
//one has passed or not.

class Student{
    constructor(name,age,grades){
        this.name=name
        this.age=age
        this.grades=grades
    }
    getPassmark(self){
        average=50
        for (let a=0;a<average.length;a++){
            if(a<average){
                console.log("The student is below the passmark")

            }
            else if(a < average && a===75){
                console.log("The student has done a good job")
            }

            else{
                console.log("the student ahas done an excellent job")  

            }

            
        }
            
            }
}

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.