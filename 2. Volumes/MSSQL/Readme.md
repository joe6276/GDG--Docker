# How to Run a  MSSQL Container 

```ruby
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

```

### Our Example

```ruby


docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=GDG@2024" --name db  -p 1401:1433 -d mcr.microsoft.com/mssql/server:2022-latest

```

if we create a DB connect to it using this credentials:

```ruby

    localhost: localhost\db, 1401
    username: sa
    password: GDG@2024

```

Now try Creating a Database

```ruby
CREATE DATABASE GDG

```

Now Stop the Container:

```ruby
docker stop db
```

Then Restart

```ruby
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=GDG@2024" --name db  -p 1401:1433 -d mcr.microsoft.com/mssql/server:2022-latest

```

You will notice the database was lost so guess what We need?


# VOLUMES
## What is Volumes

 Volumes are folders on your host machine hard drive which are mounted(“made available”, mapped)into containers

Volumes persist if a container shuts down. If a container (re-)starts and mounts a volume, any data inside of that volume is available in the container.
A container can write data into a volume and read data from it


### Named Volumes
 . Created in general –not tied to any specific container
 . Survives container shutdown / restart removal via Docker CLI
 . Can be shared across containers Can be re-used for same 
 . container (across restarts) 

```ruby
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=GDG@2024" --name db -v gdg:/var/opt/mssql  -p 1401:1433 -d mcr.microsoft.com/mssql/server:2022-latest

```

# Other Types of Volume
## Bind Mounts
  . Location on host file system, not tied to any specific container
  . Survives container shutdown / restart removal on host fs
  . Can be shared across containers
  . Can be re-used for same container (across restarts)

## Anonymous Volumes  
 . Created specifically for a single container
 . Survives container shutdown / restart unless --rm is used
 . Can not be shared across containers Since it’s anonymous, it can’t be re-used    (even on same image)
