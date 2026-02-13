import { supabase } from '../lib/supabase';

export async function createSubmission(data) {
  const { data: submission, error } = await supabase
    .from('form_submissions')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return submission;
}

export async function getSubmissions({ status = null, limit = 50, offset = 0 } = {}) {
  let query = supabase
    .from('form_submissions')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error, count } = await query;
  if (error) throw error;
  return { submissions: data, total: count };
}

export async function updateSubmission(id, updates) {
  const { data, error } = await supabase
    .from('form_submissions')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteSubmission(id) {
  const { error } = await supabase
    .from('form_submissions')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
