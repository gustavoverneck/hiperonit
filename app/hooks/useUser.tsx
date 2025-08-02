import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import type { UserProfile } from '../interfaces/profile';

export function useUser() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            const { data: authUser, error: authError } = await supabase.auth.getUser();
            if (authError || !authUser?.user) {
                setError(authError?.message || 'No authenticated user');
                setUser(null);
                setEmail(null);
                setLoading(false);
                return;
            }
            setEmail(authUser.user.email ?? null);

            const { data, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUser.user.id)
                .single();

            if (profileError) {
                setError(profileError.message);
                setUser(null);
            } else {
                setUser(data as UserProfile);
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    return { user, email, loading, error };
}
