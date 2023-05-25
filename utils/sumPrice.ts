export function sumPrice(ticket?: {
  workshop?: { price?: number };
  massage?: number;
}): number {
  if (!ticket) return 0;
  return 990 + (ticket?.workshop?.price ?? 0) + (ticket.massage ?? 0);
}
