# Challenge Node - Ignacio Esposto

Clone or download the repository and install the dependencies, the application connects to a TestUser in MongoDB-Atlas.

You can import Challenge-Node.postman_collection.json in Postmant


## Endpoints


```python
Post - localhost:8000/api/auth/create - with email, password, name and surname to create an account
Post - localhost:8000/api/auth - with email and password to login
Get - localhost:8000/api/auth - with headers token to renew

Get - localhost:8000/api/movie?name=i&sort=year&order=-1&limit=10&skip=0

Get - localhost:8000/api/episode/60ca4663f8ca1524bc3b9d98

Post - localhost:8000/api/actor
Post - localhost:8000/api/director
Post - localhost:8000/api/movie, tvshow, season...

```