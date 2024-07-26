# Networking in Containers


Here We will need to Run two Containers :

A Database Container
A Node JS Backend Application Container


Now containers ae always isolated from each other but they can access API.


![screenshot] (bn.png)


Now this means two container can't Communicate freely . They need to be in the same  Network


```ruby


docker network create gdg

```

Then add the database container  to that network

```ruby
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Root@2024" --name db -v gdg:/var/opt/mssql   --network gdg -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```

Then Build the backend Image:


``` ruby

docker build -t ndambuki/fruits .
```

Then a container

```ruby

docker run  --name backend   --network gdg -p 4000:80   -v "C:/Users/hp/Desktop/GDG/3. Networks/backend:/app" -v app/node_modules ndambuki/fruits

```

