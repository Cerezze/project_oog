import './MainPage.css';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

import {useState, useEffect} from 'react';

    function MainPage(){

        const [isLoading, setIsLoading] = useState(true);
        const [loadedReviews, setLoadedReviews] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [searchResults, setSearchResults] = useState([]);

        let arr = loadedReviews.map(i =>{
            return i.Title;
        })
    
        useEffect(() => {
            setIsLoading(true);
            fetch('https://ooglandish-default-rtdb.firebaseio.com/Reviews.json'
            ).then(response => {
                return response.json();
            }).then(data =>{
                
                const reviews = [];
    
                for(const key in data){
                    const review = {
                        id: key,
                        ...data[key]
                    }
    
                    reviews.push(review);
                };
    
                //revese array so that the latest one I create is the first one.
    
                setIsLoading(false);
                setLoadedReviews(reviews.reverse());
            }); 
        }, []);
    
        const handleChange = event => {
            setSearchTerm(event.target.value);
          };
    
         useEffect(() => {
            let results = arr.filter(review =>
                review.toLowerCase().includes(searchTerm)
            );

            setSearchResults(results);

          }, [searchTerm]);

          const handleClickSort = (id) => {
            let arr1 = loadedReviews;

           if(id == 1){
                console.log("Genre");
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].Title > arr1[j + 1].Title){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }
            else if(id == 2){ 
                console.log("Time Posted");
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].Date < arr1[j + 1].Date){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }
                
            else if(id == 3){
                console.log("Pop");
                for(let i = arr1.length - 1; i >= 0; i--){
                    for(let j = 0; j < arr1.length - 1; j++){
                        if(arr1[j].commentNum < arr1[j + 1].commentNum){
                            let temp = arr1[j];
                            arr1[j] = arr1[j + 1];
                            arr1[j + 1] = temp;
                        }
                    }
                }
            }

            setLoadedReviews([...arr1]); 
        }
        return(
            <div className="MAINPAGE">
                <Header term = {searchTerm}
                        results = {searchResults}
                        Change = {handleChange}/>
                <Body reviews = {loadedReviews} 
                      loading = {isLoading}
                      results = {searchResults}
                      Sort = {handleClickSort}/>
            </div>
        );
    }


export default MainPage;