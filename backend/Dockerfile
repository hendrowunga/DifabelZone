# Build stage
FROM maven:3.9.8-openjdk-17 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package

# Run stage
FROM amazoncorretto:17
ARG PROFILE=dev
ARG APP_VERSION=1.0.0


WORKDIR /app
COPY --from=build /build/target/backend-*.jar /app/

EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-sql-zd:5432/zone-difabel
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar  -Dspring.datasource.url=${DB_URL} backend-${JAR_VERSION}.jar