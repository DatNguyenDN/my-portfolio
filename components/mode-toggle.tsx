"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 rounded-full shadow-2xl group hover:border-2  active:scale-120 hover:border-primary"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all  " />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
