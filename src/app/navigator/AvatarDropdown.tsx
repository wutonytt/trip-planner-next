import { Avatar, Dropdown } from "flowbite-react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import { HiViewGrid, HiCog, HiLogout } from "react-icons/hi";

interface AvatarDropdownProps {
  user: DefaultSession["user"];
}

function getInitials(name: string) {
  const [first, last] = name.split(" ");
  return `${first.charAt(0)}${last.charAt(0)}`;
}

export default function AvatarDropdown({ user }: AvatarDropdownProps) {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar placeholderInitials={getInitials(user.name)} rounded />}
    >
      <Dropdown.Header>
        <span className="block text-sm">{user.name}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>
        <a href="/dashboard">Dashboard</a>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <a href="/settings">Settings</a>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        icon={HiLogout}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
