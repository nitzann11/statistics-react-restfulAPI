class AppConfig {
    // Auth endpoints
    public readonly registerUrl: string = "http://localhost:8000/api/auth/register";
    public readonly loginUrl: string = "http://localhost:8000/api/auth/login";
    public readonly logoutUrl: string = "http://localhost:8000/api/auth/logout";
    public readonly tokenUrl: string = "http://localhost:8000/api/auth/token";
    public readonly tokenRefreshUrl: string = "http://localhost:8000/api/auth/token/refresh";

    // Stats endpoints
    public readonly vacationStatsUrl: string = "http://localhost:8000/api/stats/vacations";
    public readonly userStatsUrl: string = "http://localhost:8000/api/stats/users";
    public readonly totalLikesUrl: string = "http://localhost:8000/api/stats/total-likes";
    public readonly likesDistributionUrl: string = "http://localhost:8000/api/stats/likes-distribution";
}

export const appConfig = new AppConfig();
