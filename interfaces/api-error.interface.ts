export interface ApiError {
    status: number;
    data: {
      message: string;
      // Add other error properties here if needed
    };
  }
  