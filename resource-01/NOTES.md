# Important Notes


## Notes related to the '04 - Introduzindo Volumes aos nossos Containers'

- Command to create a anonymous volume:

```bash
docker run -d -p 80:80 --name phpmessages_container --rm -v /data phpmessages
```

- Command to create a named volume:

```bash
docker run -d -p 80:80 --name phpmessages_container -v phpvolume:/var/www/html/ --rm phpmessages
```

- Command to list volumes:

```bash
docker volume ls
```

- Run the application

```bash
localhost:80
```

And then include the message: "Hello World" and then open the **[localhost/messages/msg-0.txt](localhost/messages/msg-0.txt)**

## Bind Mounts

- Command to create a bind mount:

```bash
docker run /dir/data:/data
```

Example:

```bash
docker run -d -p 80:80 --name phpmessages_container -v <relative-path-local-folder>:/var/www/html/messages --rm phpmessages
```

## Create Volume

- Command to create a volume:

```bash
docker volume create <volume-name>
``` 

## List Volume

- Command to list volumes:

```bash
docker volume ls
```

## Inspect Volume

- Command to inspect volumes:

```bash
docker volume inspect <volume-name>
```

## Remove Volume

- Command to remove volumes:

```bash
docker volume rm <volume-name>
```

## Remove volumes not used

- Command to remove volumes not used:

```bash
docker volume prune
```


