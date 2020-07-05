<-------- Answers to technical questions --------->

Que.1 How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
Ans.1: I have spent almost around three days to complete this coding assignment. If I had more time then I'd like to add restaurant's name,address and area along with their image. Finally I'd have spent more time on HTML/CSS part.

Que.2 What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Ans.2:  ReactJS is component-based and that is very useful feature. Every component defines a view or a part of a view. Component logic is written in javascript, so it is easy to pass the data to the application. My web application in reactJS is divided into various components and here is the code snippet of a component :

import Pagetitle from './components/Pagetitle';
import SearchForm from './components/SearchForm';
import RestaurantContainer from './components/RestaurantContainer';

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render(){
  return (
    <div className="wrapper">
        <div className="imgclass">
            <Provider store={store}>
               
                 <Pagetitle/>
                 <SearchForm /> 
                 <RestaurantContainer />
              
            </Provider>
        </div>
             
      </div>
          
  );
  }
}

Que.3 What were the more challenging parts of this assignment for you?
Ans.3:For me Redux was the challenging part for me because I haven't used redux before so it took sometime to understand the fundamentals of the Redux. Also, how to integrate redux into my application.

Que.4 How would you track down a performance issue in production? Have you ever had to do this?
Ans.4: There are several types of performance issues. Few of them that I have faced like backend database/API latency and connection issues, dependency issues.
For dependency issues I usually start with my server logs and check whether all my dependencies and packages are available or not and check my environment/modules has been set up correctly. If not then then I start resolving them.
For backend database/API latency or connection issues I usually start with my application logs to check whether I'm getting my data from database/API or having connection issues. Once I had to debug API issue which I resolved by looking into application logs.

Que.5 How would you improve the API that you just used?
Ans.5: Provided API is good but it can be improved by providing more information like restaurants ratings, cuisine type, their opening and closing timings along with exclusive deals that we can show. Evenmore, API should have HTTPS instead of HTTP for secure connection.

Que.6 Please describe yourself using JSON.
Ans.6: Describing me in json format:

{
"firstName" : "Ashni",
"lastName" : "Parikh",
"contact" : {
    "emailId" : "ashniparikh94@gmail.com",
    "phone" : "647-898-7694"
    },
"socialProfiles" : {
    "linkedIn" : "https://www.linkedin.com/in/ashni-parikh-66b4a6ba/",
    "gitHub" : "https://github.com/ashniparikh"
    },
"education" : {
    "university" : "Lambton College",
    "graduation" : "September, 2018 ",
    "degree" : "Post-Graduation diploma"
    },
"skills" : {
    "languages" : ["python", "java", "php"],
    "frameworks" : ["React JavaScript", " JSON/REST APIs", "Flask", "HTML/CSS"],
    "databases" : ["MongoDB", "MySQL"],
    "tools" : ["Selenium Web driver", "Github", "JIRA", "Visual Studio code"]
    }
}
