# Estágio 1: Build da aplicação usando Java 21
    FROM eclipse-temurin:21-jdk-jammy AS build
    WORKDIR /app
    COPY . .
    RUN ./mvnw clean package -DskipTests

    # Estágio 2: Execução leve
    FROM eclipse-temurin:21-jre-jammy
    WORKDIR /app
    COPY --from=build /app/target/*.jar app.jar
    EXPOSE 8081
    ENTRYPOINT ["java", "-jar", "app.jar"]