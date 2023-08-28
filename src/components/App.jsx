import { lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, PrivateRoute, PublicRoute } from 'components';
import Welcome from 'pages/Welcome';
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import { useAuth } from 'redux/auth/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const AddRecipe = lazy(() => import('pages/AddRecipe'));
const Drinks = lazy(() => import('pages/Drinks'));
const Favorite = lazy(() => import('pages/Favorite'));
const Main = lazy(() => import('pages/Main'));
const MyRecipes = lazy(() => import('pages/MyRecipes'));
const Recipe = lazy(() => import('pages/Recipe'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      ``
      {/* <Route path="/" element={<Navigate to="/main" />} /> */}
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/main" component={<Main />}></PrivateRoute>
        }
      />
      {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}
      <Route
        path="/"
        element={<PublicRoute redirectTo="/welcome" component={<Welcome />} />}
      />
      {/* Unauthorized user routes */}
      <Route
        path="/welcome"
        element={<PublicRoute redirectTo="/" component={<Welcome />} />}
      />
      <Route
        path="/signup"
        element={<PublicRoute redirectTo="/" component={<Signup />} />}
      />
      <Route
        path="/signin"
        element={<PublicRoute redirectTo="/" component={<Signin />} />}
      />
      {/* Authorized user routes */}
      <Route path="/" element={<Layout />}>
        <Route
          path="/main"
          element={<PrivateRoute redirectTo="/welcome" component={<Main />} />}
        />
        <Route
          path="/drinks"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Drinks />} />
          }
        />
        <Route
          path="/drinks/:categoryName"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Drinks />} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/welcome" component={<AddRecipe />} />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MyRecipes />} />
          }
        />
        <Route
          path="/favorite"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Favorite />} />
          }
        />
        <Route
          path="/recipe/:recipeId"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Recipe />} />
          }
        />
      </Route>
      {/* Unknown route redirection */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/main" />} />
//       {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}

//       {/* Unauthorized user routes */}
//       <Route path="/welcome" element={<Welcome />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/signin" element={<Signin />} />

//       {/* Authorized user routes */}
//       <Route path="/" element={<Layout />}>
//         <Route path="main" element={<Main />} />
//         <Route path="drinks" element={<Drinks />} />
//         <Route path="drinks/:categoryName" element={<Drinks />} />
//         <Route path="add" element={<AddRecipe />} />
//         <Route path="my" element={<MyRecipes />} />
//         <Route path="favorite" element={<Favorite />} />
//         <Route path="recipe/:recipeId" element={<Recipe />} />
//       </Route>

//       {/* Unknown route redirection */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// {
/* <Route
          path="/welcome"
          element={
            <PublicRoute redirectTo="/">
              <Welcome />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/">
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute redirectTo="/">
              <Signin />
            </PublicRoute>
          }
        // /> */
// }
//   <Route
//   path="/drinks"
//   element={
//     <PrivateRoute>
//       <Drinks />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/drinks/:categoryName"
//   element={
//     <PrivateRoute>
//       <Drinks />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/add"
//   element={
//     <PrivateRoute>
//       <AddRecipe />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/my"
//   element={
//     <PrivateRoute>
//       <MyRecipes />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/favorite"
//   element={
//     <PrivateRoute>
//       <Favorite />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/recipe/:recipeId"
//   element={
//     <PrivateRoute>
//       <Recipe />
//     </PrivateRoute>
//   }
// />
