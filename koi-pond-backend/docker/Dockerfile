FROM maven:3.9.9-amazoncorretto-21-debian

WORKDIR /app

COPY ../src ./src
COPY ../pom.xml ./
COPY entrypoint.sh ./

RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]
