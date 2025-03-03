/**
 * Iterative Approach
 * @param n - A positive integer as input.
 * @returns The sum of numbers from 1 to n
 *
 * Complexity:
 *   - Time Complexity: O(n) - The loop runs from 1 to n.
 *   - Space Complexity: O(1) - Only a single variable is used to store the result.
 */

function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Mathematical Formula
 * @param n - A positive integer as input.
 * @returns The sum of numbers from 1 to n
 *
 * Complexity:
 *   - Time Complexity: O(1) - Only a single mathematical operation is performed.
 *   - Space Complexity: O(1) - No additional memory is used.
 */

function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

/**
 * Recursive Approach
 * @param n - A positive integer as input.
 * @returns The sum of numbers from 1 to n
 *
 * Complexity:
 *   - Time Complexity: O(1) - Each recursive call reduces n by 1.
 *   - Space Complexity: O(1) - Each recursive call adds a stack frame.
 */

function sum_to_n_c(n: number): number {
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
}
