# react-netflix-clone-course
**HUMBERT Guillaume**
## Features
This project is heavely focus on UI not really on fonctionnalities.
-   Homepage [x] (Bonus)
-   Login [x]
-   Who's watching [x]
    -   Create new profile [x]
    -   Edit profile [x]
    -   Delete profile [x]
-   Home page [x]
    -   Section by type [x]
    -   Top shows [x]
-   My List (care, this is scoped to a profile)
    -   Add to my List
    -   Remove from my List
-   Display details of a show [x]
    -   Movie: description, actors, cover, etc [x] (Not all details)
    -   Series: list of episodes, description, actors, cover, [x] (Not all details)
-   Search [x] (Not the same as the true Netflix)

### Issues
    Le typage pourrait être largement amélioré à certains endroits (manque de temps) et le découpage en composant aussi.
    Toute la partie "My list" n'est pas présente. Et la partie search est totalement différente de celle de Netflix. La search bar de la navbar est uniquement un lien cliquable vers la partie search.
    Le slider des rows contenant les films et les series n'est uniquement visible et utilisable sur chrome.

### To go further

-   Internationalization 
-   Display trailers from youtube

## How to get data

You have to use [this](https://www.themoviedb.org/) to get all your data. You first have to create an api key then you are free to use it.
[Documentation](https://developers.themoviedb.org/3)

## How to store data

To store data about user we will use localeStorage. This is unsafe for this kind of data but this is not the purpose of the course.
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Routing

For your routing use react-router-dom.
[Documentation](https://v5.reactrouter.com/web/guides/quick-start)

## Design

You have to use MUI lib to build your interfaces.
[Documentation](https://mui.com/)

![](Assets/homepage.png)
![](Assets/login.png)
![](Assets/movieDetails.png)
![](Assets/mylist.png)
![](Assets/search.png)
![](Assets/sectionByType.png)
![](Assets/serieDetails.png)
![](Assets/serieEpList.png)
![](Assets/topshows.png)
![](Assets/whoswatching.png)
