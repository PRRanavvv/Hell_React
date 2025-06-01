# Namaste React 🚀


#Yum Rush

/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * -RestaurantContainer
 * -RestaurantCard
 *  - img
 *  - name of res. start rating, cuisines
 *  - delivery time or something
 * Footer
 * - CopyRight
 * - Links
 * - Address 
 * - Contact
 */


___________________________________


- Default Export/Import 

export default Component;  (only once per module)
import Component from "path";  (can be named anything)


- Named Export/Import 

export const Component;   (multiple per module)
import {Component} from "path";   (must use exact exported names) ..... like {useEffect} and {useState}





___________________

# React Hooks
(Normal JS utility functions)


- useState() ~ basically used to generate and manage superpowerful state variables within a functional component.... replaces the class-based component state management.


- useEffect() ~ this allows you to perform side effects (data fetching)..... it runs after the component's already rendered and can be used to handle lifecycle events.





# 2 types of Routing in web apps

- Client Side routing
- Server Side routing 



___________________________________________



# Unique Key id while using map:


Each item in the list must be uniquely identified

Why?
When we have components at same level and if a new component
comes on the first without ID, DOM is going to re-render all the
components again. As DOM can’t identify where to place it. 

But if we give each of them a unique ID then react knows where
to put that component according to the ID. It is a good
optimization and performance thing. 

~ Note Never use index as keys in map. It is not recommended.














__________________________________________________________________________

# never update the state variables directly