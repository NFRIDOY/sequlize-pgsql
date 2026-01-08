import { sequelize } from "./app/config/index";
import { app, port } from "./app";

// Start server
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    // Connect to DB
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
