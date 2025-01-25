# Build stage
FROM maven:3.9.9-openjdk-23 AS build
WORKDIR /build

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# Run stage
FROM amazoncorretto:17-alpine
ARG PROFILE=dev
ARG APP_VERSION=0.0.1-SNAPSHOT

WORKDIR /app
COPY --from=build /build/target/backend-*.jar /app/

RUN addgroup --system appgroup && adduser --system appuser --ingroup appgroup
USER appuser

EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-sql-zd:5432/zone-difabel
ENV JAR_VERSION=${APP_VERSION}

VOLUME /app/logs

HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:8088/api/v1/actuator/health || exit 1

CMD java -jar -Dspring.datasource.url=${DB_URL} backend-${JAR_VERSION}.jar
