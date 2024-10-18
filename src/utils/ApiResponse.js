class ApiResponse {
    constructor(
        success,
        message = "Success",
        data,
    ) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

export default ApiResponse;