import { supabaseAdmin } from "../../client";

export default async function handler(req, res) {
    const result = await supabaseAdmin
    .from('images')
    .select('id, title, description, imageSrc')
    res.json(result.data)
}
