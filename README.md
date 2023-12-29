# Poll Backend

Welcome to the backend application for Abhiman This Express.js application interacts with a MongoDB database to manage Quetions.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
1. **Clone the repository:**
    ```bash
    https://github.com/yogeshnishad007/abhiman.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Deployed Link
To access the home page, navigate to [https://lovely-moccasins-eel.cyclic.app/](https://tiny-plum-drill-cape.cyclic.app/) in your browser.

### API Endpoints

#### Get Data
- Retrieve a list :
    ```http
    GET /get/polls
    ```
    Example response:
    ```json
   [
    {
        "title": "Superman",
        "category": "friction",
        "startDate": "2023-10-03",
        "endDate": "2023-10-10",
        "totalVotes": 0,
        "numQuestionSets": 0,
        "sampleQuestion": null
    },
    {
        "title": "Mars",
        "category": "Movie",
        "startDate": "2023-11-23",
        "endDate": "2023-11-30",
        "totalVotes": 0,
        "numQuestionSets": 0,
        "sampleQuestion": null
    },
    ]
    ```

#### Add a Data
- Add a Data to the database:
    ```http
    POST /post/polls
    ```
    Example request body:
    ```json
   {

      "title":"Super",
      "category":"sci-fi",
      "startDate":"2023-09-10",
      "endDate":"2023-09-15",
      "minReward":10,
      "maxReward":50

}
    ```

#### Update a Data
- Update an existing Data by ID:
    ```http
    PATCH  /update/polls/:pollId
    ```
    Example request body:
    ```json
    {
        "title": "Updated Title",
       
    }
    
    ```

#### Delete a Data
- Delete a Data by ID:
    ```http
    DELETE /delete/polls/:id
    ```

    Example response:
    ```json
     {
    "message": "Poll details delete successfully.",
    "PollId": "658e993db0bc73f03c5a784d"
    }

    ```

Make sure to run the application locally (http://localhost:4000) to test these endpoints.
