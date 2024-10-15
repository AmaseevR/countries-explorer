Project Structure
The project is designed to promote scalability, maintainability, and readability through its modular folder structure:

Feature-driven structure: Each feature of the application (such as FilterCountry, SearchCountry, SortCountry) is organized into its own folder. This enhances separation of concerns and allows for easier understanding and management of each feature. It also simplifies testing and maintenance since changes to one feature don’t affect others.

Shared Resources: The shared folder contains common functionalities, like API configurations, GraphQL, hooks, providers, and types, which are used across the application. This reduces redundancy, as shared logic is centralized, preventing code duplication and ensuring consistency.

Entity and Component Organization: Components related to specific entities (like Country and Weather) are grouped together in their respective folders under entities. This makes it easy to find and manage the components related to a particular entity, especially when working with complex UI elements. Each entity has a dedicated folder for ui components, ensuring UI concerns are neatly separated from business logic.

Reusability and Modularity: The app/graphql and shared/graphql directories demonstrate a focus on centralized GraphQL logic, making the API interactions reusable across various components. Similarly, helpers and hooks offer reusable utility functions and React hooks that can be shared across different parts of the app.

Scalability: This structure is highly scalable. As new features or entities are added to the application, they can easily be placed into their own dedicated folders without disrupting existing functionality. Each feature or entity operates independently, which reduces the complexity of future enhancements.

Ease of Testing: The modular nature of this architecture makes testing more straightforward. Individual components or features can be tested in isolation, and the organization helps avoid tight coupling between features. Mocking configurations and APIs is made easier by keeping related logic centralized.

