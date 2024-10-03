/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3V7oS9IJua5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the Recipe type based on your backend model
interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  createdAt: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="flex items-start p-4 mx-auto max-w-[600px]">
      <div className="flex">
        <img
          src="/placeholder.svg"
          alt="Recipe"
          className="w-[150px] h-[150px] object-cover rounded-md"
          width="150"
          height="150"
          style={{ aspectRatio: "150/150", objectFit: "cover" }}
        />
        <div className="flex flex-col justify-between ml-4 flex-1">
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>
              Cooking Time: {recipe.cookingTime} mins | Servings:{" "}
              {recipe.servings}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm font-medium">
              <p>Ingredients:</p>
              <ul className="list-disc list-inside">
                {recipe.ingredients.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm font-medium">
              <p>Instructions:</p>
              <ol className="list-decimal list-inside">
                {recipe.instructions.split("\n").map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="px-4 py-2 text-sm font-semibold rounded-md">
              View Recipe
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
