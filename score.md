# Example Score Calculations

We will be using Redux to maintain state, so we will not be pushing this to state, but this is an example of how to make the calculations for the score that a user receives.

```javascript
 // if the user gets all excellent scores, they get a super bonus regardless of time
      if (calculate === 40 ){
          this.setState({score: calculate + 50})

      // time left greater than 90 and score greater than 10, bonus
      } else if (timer > 90 && calculate >= 10 ) {
        this.setState({score: calculate + 10})
      
      // time left greater than 60 and score greater than 20, bonus
      } else if (timer > 60 && calculate >= 20){
        this.setState({score: calculate + 10 })

      // time left greater than 30 and score greater than 30, bonus
      } else if (timer > 30 && calculate >= 30) {
        this.setState({score: calculate + 10})
      
      // outside of bonus time and points
      } else {
        this.setState({score: calculate })
      }    
    }
```