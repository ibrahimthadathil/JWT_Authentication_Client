import { ProfileHeader } from "@/components/profile-header"
import { ProfileShell } from "@/components/profile-shell"
import { UserProfileForm } from "@/components/user-profile-form"

export default function ProfilePage() {
  return (
    <ProfileShell>
      <ProfileHeader heading="Profile" text="Manage your account settings and profile information." />
      <div className="grid gap-10">
        <UserProfileForm />
      </div>
    </ProfileShell>
  )
}
