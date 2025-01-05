# Rental Admin

Rental Admin is a multitenant React-admin application designed for managing rental businesses. It leverages Supabase as the backend service for authentication, data storage, and real-time database operations. The application is optimized for managing cars, contracts, and users, with customizable data views and forms.

## Features

- **User Authentication:** Email and password-based authentication using Supabase.
- **Dynamic Forms:** Add, edit, and view cars and contracts with dynamic field rendering.
- **Custom Fields:** Compute fields dynamically, such as total charges for contracts.
- **Filterable Lists:** Filter and search data across multiple columns.
- **Custom Styling:** Custom themes and CSS for enhanced user experience.
- **Responsive Design:** Fully responsive for all screen sizes.
- **Role-Based Permissions:** Manage user access to tenant-specific data.

---

## Technologies Used

### Frontend
- **React Admin**: A frontend framework for building admin panels.
- **Material-UI**: For consistent styling and UI components.

### Backend
- **Supabase**: A backend-as-a-service for authentication, database, and real-time functionality.
- **PostgreSQL**: Database for storing and managing data.

---

## Installation

### Prerequisites
- Node.js (>= 14.x)
- Supabase project set up with the required schema (see [Database Schema](#database-schema))

### Clone the Repository
```bash
git clone https://github.com/your-username/rental-admin.git
cd rental-admin
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_SUPABASE_URL=<your-supabase-url>
REACT_APP_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

---

## Run the Application

### Development Mode
Start the development server:
```bash
npm run dev
```

Open the app in your browser at [http://localhost:3000](http://localhost:3000).

### Production Build
Build the app for production:
```bash
npm run build
```

Serve the build locally:
```bash
npm run preview
```

---

## Database Schema

Ensure the following tables are set up in your Supabase project:

### `auth.users`
| Column  | Type    | Description               |
|---------|---------|---------------------------|
| `id`    | UUID    | Auto-generated user ID    |
| `email` | VARCHAR | User email                |
| `...`   | Other   | Additional fields managed by Supabase |


### `car`
| Column        | Type      | Description            |
|---------------|-----------|------------------------|
| `id`          | INT       | Primary Key            |
| `model`       | VARCHAR   | Car model              |
| `make`        | VARCHAR   | Car make               |
| `year`        | INT       | Manufacturing year     |
| `plate_numberr` | VARCHAR | License plate number   |
| `plate_code`  | VARCHAR   | License plate code     |
| `created_at`  | TIMESTAMP | Auto-generated timestamp |

### `contract`
| Column          | Type      | Description              |
|-----------------|-----------|--------------------------|
| `id`            | INT       | Primary Key              |
| `number`        | INT       | Contract number          |
| `customer_name` | VARCHAR   | Customer name            |
| `actual_out_date` | DATE    | Rental start date        |
| `actual_out_time` | TIME    | Rental start time        |
| `car`           | INT       | FK to `car.id`           |
| `rent_charge`   | NUMERIC   | Rental charge            |
| `fine_charge`   | NUMERIC   | Fine charge              |

---

## Customization

### Theming
Update the `theme.js` file to customize the look and feel of the application.

### Authentication
The `authProvider` in `src/components/providers/authProvider.js` handles login, logout, and user authentication using Supabase.

### Data Fetching
Modify the `dataProvider` in `src/components/providers/dataProvider.js` to adjust how data is fetched, updated, and deleted from Supabase.

---

## Deployment

### Vercel
1. Connect the repository to Vercel.
2. Add environment variables in the Vercel dashboard.
3. Deploy the app.

### Netlify
1. Connect the repository to Netlify.
2. Add environment variables in the Netlify dashboard.
3. Deploy the app.

---

## Future Enhancements

- Add multitenant support to dynamically switch between businesses.
- Implement role-based access control for more granular permissions.
- Add real-time notifications for critical events.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgments
- [React-Admin](https://marmelab.com/react-admin/)
- [Supabase](https://supabase.io/)
- [Material-UI](https://mui.com/)

