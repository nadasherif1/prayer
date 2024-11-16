"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookIcon from "@mui/icons-material/Book";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarsIcon from "@mui/icons-material/Stars";
import RadioIcon from "@mui/icons-material/Radio";
import { motion } from "framer-motion";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white py-4 shadow-md">
      <div className="flex flex-row justify-between items-center mx-auto container px-4 max-w-7xl">
        <h1 className="text-2xl lg:text-3xl font-bold">
          <Link href="/">الفوز بالجنة</Link>
        </h1>

        <nav className="hidden lg:block">
          <ul className="flex gap-6 text-lg font-semibold">
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/">
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/prayer-times">
                مواقيت الصلاة
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/quran">
                القران الكريم
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/azkar">
                الاذكار
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/hadith">
                الاحاديث
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/namesOfAllah">
                الاسماء الحسني
              </Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link className="text-white hover:text-gray-400" href="/radioPage">
                اذاعه القران الكريم
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                backgroundColor: "#2D3748",
                color: "#fff",
                width: "70%",
              },
            }}
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <List>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/">الصفحة الرئيسية</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <AccessTimeIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/prayer-times">مواقيت الصلاة</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <BookIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/quran">القران الكريم</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <NotificationsIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/azkar">الاذكار</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <MenuBookIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/hadith">الاحاديث</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <StarsIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/namesOfAllah">الاسماء الحسني</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <RadioIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/radioPage">اذاعه القران الكريم</Link>
                  </ListItemText>
                </ListItem>
              </List>
            </motion.div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;


